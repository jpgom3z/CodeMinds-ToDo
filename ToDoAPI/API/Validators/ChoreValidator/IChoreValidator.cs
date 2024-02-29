using API.DataTransferObjects;

namespace API.Validators
{
    public interface IChoreValidator
    {
        bool ValidateInsertUpdate(int? id, InsertUpdateChoreDTO data, List<string> messages);
    }
}
