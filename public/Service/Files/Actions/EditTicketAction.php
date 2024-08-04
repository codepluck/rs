<?php

namespace Modules\Owner\Tickets\Actions;

use Modules\Abstracts\Actions\Action;
use Modules\Owner\Tickets\Policies\TicketPolicy;
use Modules\Owner\Tickets\Repositories\TicketRepository;

class AllTicketsAction extends Action
{
    public $repository;

    public function __construct(TicketRepository $repository)
    {
        $this->repository = $repository;
    }

    public function handle($request)
    {
        authorize('All', TicketPolicy::class);
        return $this->repository->all();
    }
}
