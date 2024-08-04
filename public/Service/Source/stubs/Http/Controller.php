<?php

namespace Modules\{role}\{module}\Controllers;

use Apiato\Core\Exceptions\IncorrectIdException;
use Apiato\Core\Exceptions\InvalidTransformerException;
use App\Containers\{role}\{module}\Actions\Create{model}Action;
use App\Containers\{role}\{module}\Http\Requests\Create{model}Request;
use App\Containers\{role}\{module}\Transformers\{model}Transformer;
use App\Ship\Exceptions\CreateResourceFailedException;
use App\Ship\Parents\Controllers\{{base-controller}};
use Illuminate\Http\JsonResponse;
use Modules\Abstracts\Actions\Action;

class {{class-name}} extends {{base-controller}}
{
    public function __construct(
        private readonly Create{{model}}Action $action,
    ) {
    }

    /**
     * @throws CreateResourceFailedException
     * @throws InvalidTransformerException
     * @throws IncorrectIdException
     */
    public function __invoke(Create{{model}}Request $request): JsonResponse
    {
        ${{entity}} = $this->action->run($request);

        return $this->created($this->transform(${{entity}}, {{model}}Transformer::class));
    }
}