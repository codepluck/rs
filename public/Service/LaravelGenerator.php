<?php

namespace App\Service;

use Illuminate\Support\Str;

class LaravelGenerator
{
    protected $sourceDirectory;
    protected $destinationDirectory;


    protected $rules = [];

    public function __construct($sourceDirectory, $destinationDirectory, $rules = [])
    {
        $this->rules = $rules;
        $this->sourceDirectory = $sourceDirectory;
        $this->destinationDirectory = $destinationDirectory;
    }


    public function getRules()
    {
        return   [
            "role" => "Owner",
            "module" => "Tickets",
            "controller" => "Ticket",
            "model" => "Ticket",
            "action" =>    [
                "all" => ['action' => 'All'],
                "create" => ['action' => 'Create'],
                "edit" => ['action' => 'Edit'],
                "show" => ['action' => 'Show'],
                "store" => ['action' => 'Store'],
                "update" => ['action' => 'Update'],
                "delete" => ['action' => 'Delete'],
            ]

            // "action" => [
            //     "All",
            //     "Create",
            //     "Edit",
            //     "Show",
            //     "Store",
            //     "Update",
            //     "Delete",
            // ],
        ];



        // return         [
        //     "role" => "Owner",
        //     "modules" => [
        //         "Tickets" => [
        //             "controller" => "Ticket",
        //             "model" => "Ticket",
        //             "actions" => [
        //                 "all" =>  "All",
        //                 "create" => "Create",
        //                 "edit" => "Edit",
        //                 "show" => "Show",
        //                 "store" => "Store",
        //                 "update" => "Update",
        //                 "delete" => "Delete",
        //             ],
        //         ]
        //     ]
        // ];
    }

    public function generate()
    {
        $structure = json_decode(file_get_contents($this->sourceDirectory . '/structure.json'), true);

        foreach ($structure['directories'] as $directory => $config) {
            foreach ($config['files'] as $file) {
                $this->generateFile($directory, $file, $config['stubs'] ?? []);
            }
        }
    }

    protected function generateFile($directory, $file, $stubs)
    {
        $stubContent = '';

        if (isset($stubs) && count($stubs)) {
            $stubWitContent = $this->getStubContent($directory, $stubs[0]); // Assuming there's only one stub per file
            $stubContent = $this->replacePlaceholdersRecursive($stubWitContent, $this->getRules());


            // dd($data);
            // $withRole =  Str::replace('{Role}', 'Owner', $stubWitContent);
            // $withModule =  Str::replace('{Module}', 'Tickets', $withRole);
            // $stubContent =  Str::replace('{Model}', 'Ticket', $withModule);
        }
        $destinationPath = $this->destinationDirectory . '/' . $directory;
        if (!file_exists($destinationPath)) {
            mkdir($destinationPath, 0755, true); // Create directory if it doesn't exist
        }

        $filePath = $destinationPath . '/' . $file;
        $withModule =  Str::replace('{Module}', 'Ticket', $filePath);

        // dd($withModule);
        file_put_contents($withModule, $stubContent);

        echo "Generated: $filePath\n";
    }


    public function replacePlaceholdersRecursive($stub, $data)
    {
        // dd($data);

        foreach ($data as $key => $value) {
            if (is_array($value)) {
                // If the value is an array, recursively replace placeholders
                $stub = $this->replacePlaceholdersRecursive($stub, $value);
            } else {
                // Replace placeholders in the stub file
                $placeholder = '{' . $key . '}';
                $stub = str_replace($placeholder, $value, $stub);
            }
        }
        return $stub;
    }




    protected function getStubContent($directory, $stubFile)
    {
        $stubPath = $this->sourceDirectory . '/stubs/' . $directory . '/' . $stubFile;
        return file_get_contents($stubPath);
    }
}
