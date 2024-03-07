using System;
using System.Collections.Generic;

namespace API.Data.Models;

public partial class Chore
{
    public int Id { get; set; }

    public string Description { get; set; } = null!;

    public DateTime DueDate { get; set; }

    public int StateId { get; set; }

    public virtual State State { get; set; } = null!;
}
