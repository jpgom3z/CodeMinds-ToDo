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

        public async Task<Chore?> FindChore(int id)
        {
            return await this._database
                .Chore
                .Include(s => s.State)
                .Where(c => c.Id == id)
                .FirstOrDefaultAsync();
        }

        public async Task InsertChore(Chore entity)
        {
            this._database.Chore.Add(entity);
            await this._database.SaveChangesAsync();
            await this._database.Entry(entity).Reference(s => s.State).LoadAsync();
        }

        public async Task UpdateChore(Chore entity)
        {
            this._database.Chore.Update(entity);
            await this._database.SaveChangesAsync();
            await this._database.Entry(entity).Reference(s => s.State).LoadAsync();
        }

        public async Task DeleteChore(Chore entity)
        {
            this._database.Chore.Remove(entity);
            await this._database.SaveChangesAsync();
        }
    }
}
