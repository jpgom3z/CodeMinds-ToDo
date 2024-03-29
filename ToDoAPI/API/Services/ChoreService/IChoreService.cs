﻿using API.Data.Filters;
using API.Data.Models;

namespace API.Services
{
    public interface IChoreService
    {
        IQueryable<Chore> ListChores(ChoreListFilter? filter = null);
        Task <Chore?> FindChore(int id);
        Task InsertChore(Chore entity);
        Task UpdateChore(Chore entity);
        Task DeleteChore(Chore entity);
    }
}
