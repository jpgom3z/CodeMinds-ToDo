using API.Data;
using API.Data.Models;

namespace API.Services
{
    public class StateService : IStateService
    {
        private readonly ToDoDB _database;

        public StateService(ToDoDB database)
        {
            this._database = database;
        }

        public IQueryable<State> ListStates()
        {
            return this._database
                .State;
        }
    }
}
