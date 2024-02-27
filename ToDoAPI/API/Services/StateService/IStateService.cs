using API.Data.Models;

namespace API.Services
{ 
    public interface IStateService
    {
        IQueryable<State> ListStates();
    }
}
