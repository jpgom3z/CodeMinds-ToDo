using API.Data;
using API.DataTransferObjects;
using Microsoft.EntityFrameworkCore.Storage;

namespace API.Validators.ChoreValidator
{
    public class ChoreValidator : IChoreValidator
    {
        private readonly ToDoDB _database;

        public ChoreValidator(ToDoDB database) 
        {
            _database = database;
        }
        public bool ValidateInsertUpdate(int? id, InsertUpdateChoreDTO data, List<string> messages)
        {
            List<string> innerMessages = new();

            //Description validation
            if (string.IsNullOrWhiteSpace(data.Description))
            {
                innerMessages.Add("La descripción de la tarea es requerida");
            }
            else if (data.Description.Length > 255) 
            {
                innerMessages.Add("La descripción de la tarea no puede contener más de 255 caracteres");
            }

            //Due Date validation
            if (!data.DueDate.HasValue)
            {
                innerMessages.Add("Fecha de vencimiento es requerida");
            }

            //State validation
            if (!data.StateId.HasValue)
            {
                innerMessages.Add("Estado es requerido");
            }
            else if (!this._database.State.Any(s => s.Id == data.StateId))
            {
                innerMessages.Add("Debe seleccionar un estado que esté registrado en el sistema");
            }
            messages.AddRange(innerMessages);
            return !innerMessages.Any();

        }
    }
}
