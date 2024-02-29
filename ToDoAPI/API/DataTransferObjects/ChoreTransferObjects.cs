using API.Data.Models;

namespace API.DataTransferObjects
{
    public class GetChoreDTO
    {
        public int Id { get; set; }

        public string Description { get; set; } = null!;

        public DateTime DueDate { get; set; }

        public GetStateDTO State { get; set; } = null!;

    }

    public class InsertUpdateChoreDTO
    {
        public string? Description { get; set; } = null!;

        public DateTime? DueDate { get; set; }

        public int? StateId { get; set; } = null!;
    }
}
