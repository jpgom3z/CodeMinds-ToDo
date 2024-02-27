using API.Data;
using API.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class ChoreService : IChoreService
    {
        private readonly ToDoDB _database;

        public ChoreService(ToDoDB database)
        {
            this._database = database;
        }

        public IQueryable<Chore> ListChores()
        {
            return this._database
                .Chore
                .Include(s => s.State);
        }

        public Task InsertChore(Chore entity)
        {
            throw new NotImplementedException();
        }

        public Task UpdateChore(Chore entity)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteChore(Chore entity)
        {
            this._database.Chore.Remove(entity);
            await this._database.SaveChangesAsync();
        }
    }
}
