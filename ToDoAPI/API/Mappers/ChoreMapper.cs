using API.Data.Models;
using API.DataTransferObjects;
using AutoMapper;

namespace API.Mappers
{
    public class ChoreMapper : Profile
    {
        public ChoreMapper() 
        {
            CreateMap<Chore, GetChoreDTO>();
            CreateMap<InsertUpdateChoreDTO, Chore>();
        }
        
    }
}
