using API.Data.Models;
using API.DataTransferObjects;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/chores")]
    [ApiController]
    public class ChoreController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IChoreService _choreService;

        public ChoreController(IMapper mapper, IChoreService choreService)
        {
            this._mapper = mapper;
            this._choreService = choreService;
        }

        [HttpGet]
        public async Task<ActionResult<APIResponse>> ListChores()
        {

            List<Chore> list = await this._choreService.ListChores()
                                    .OrderBy(c => c.DueDate)
                                    .ToListAsync();

            APIResponse response = new()
            {
                Data = list.Select(c => this._mapper.Map<Chore, GetChoreDTO>(c))
            };
            return response;
        }
    }
}
