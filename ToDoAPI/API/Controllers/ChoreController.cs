using API.Data.Models;
using API.DataTransferObjects;
using API.Services;
using API.Validators;
using API.Validators.ChoreValidator;
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
        private readonly IChoreValidator _choreValidator;

        public ChoreController(IMapper mapper, IChoreService choreService, IChoreValidator choreValidator)
        {
            this._mapper = mapper;
            this._choreService = choreService;
            this._choreValidator = choreValidator;
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

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<APIResponse>> FindChore(int id)
        {
            Chore? chore = await this._choreService.FindChore(id);
            if (chore == null)
            {
                return HttpErrors.NotFound("Tarea no existe en el sistema");
            }
            APIResponse response = new()
            {
                Data = this._mapper.Map<Chore, GetChoreDTO>(chore)
            };
            return response;
        }

        [HttpPost]
        public async Task<ActionResult<APIResponse>> InsertChore(InsertUpdateChoreDTO data)
        {
            APIResponse response = new();
            response.Success = this._choreValidator.ValidateInsertUpdate(null, data, response.Messages);

            if (response.Success)
            {
                Chore? chore = this._mapper.Map<InsertUpdateChoreDTO, Chore>(data);
                await this._choreService.InsertChore(chore);
                response.Data = this._mapper.Map<Chore, GetChoreDTO> (chore);
                response.Messages.Add("Tarea ha sido insertada");
            }
            return response;
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<APIResponse>> UpdateChore(int id, InsertUpdateChoreDTO data)
        {
            Chore? chore = await this._choreService.FindChore(id);
            if (chore == null)
            {
                return HttpErrors.NotFound("Tarea no existe en el sistema");
            }
            APIResponse response = new();
            response.Success = this._choreValidator.ValidateInsertUpdate(null, data, response.Messages);
            if (response.Success)
            {
                this._mapper.Map(data, chore);
                await this._choreService.UpdateChore(chore);
                response.Data = this._mapper.Map<Chore, GetChoreDTO?> (chore);
                response.Messages.Add("La tarea ha sido actualizada");
            }
            return response;
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult<APIResponse>> DeleteChore(int id)
        {
            Chore? chore = await this._choreService.FindChore(id);
            if (chore == null)
            {
                return HttpErrors.NotFound("Tarea no existe en el sistema");
            }

            APIResponse response = new();

            await this._choreService.DeleteChore(chore);
            response.Data = this._mapper.Map<Chore, GetChoreDTO?>(chore);
            response.Messages.Add("Tarea ha sido borrada");

            return response;
        }

    }
}
