using System;
using System.Collections.Generic;
using API.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public partial class ToDoDB : DbContext
{
    public ToDoDB()
    {
    }

    public ToDoDB(DbContextOptions<ToDoDB> options)
        : base(options)
    {
    }

    public virtual DbSet<State> State { get; set; }

    public virtual DbSet<Task> Task { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=ToDoDB");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<State>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PKState");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Task>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PKTask");

            entity.Property(e => e.Description).HasMaxLength(255);

            entity.HasOne(d => d.State).WithMany(p => p.Task)
                .HasForeignKey(d => d.StateId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKStateTaskStateId");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
