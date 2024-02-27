using API.Data.Models;
using API.DataTransferObjects;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/states")]
    [ApiController]
    public class StateController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IStateService _stateService;

        public StateController(IMapper mapper, IStateService stateService)
        {
            this._mapper = mapper;
            this._stateService = stateService;
        }

        [HttpGet]
        public async Task<ActionResult<APIResponse>> ListStates()
        {

            List<State> list = await this._stateService.ListStates()
                                    .OrderBy(s => s.Name)
                                    .ToListAsync();

            APIResponse response = new()
            {
                Data = list.Select(s => this._mapper.Map<State, GetStateDTO>(s))
            };
            return response;
        }
    }
}
