using System;
using System.Collections.Generic;

namespace API.Data.Models;

public partial class State
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Task> Task { get; set; } = new List<Task>();
}
