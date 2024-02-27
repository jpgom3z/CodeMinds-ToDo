using API.Data.Models;
using API.DataTransferObjects;
using AutoMapper;

namespace API.Mappers
{
    public class StateMapper : Profile
    {
        public StateMapper()
        {
            CreateMap<State, GetStateDTO> ();
        }
    }
}
