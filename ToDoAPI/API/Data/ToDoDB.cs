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

    public virtual DbSet<Chore> Chore { get; set; }

    public virtual DbSet<State> State { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=ToDoDB");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Chore>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PKChore");

            entity.Property(e => e.Description).HasMaxLength(255);

            entity.HasOne(d => d.State).WithMany(p => p.Chore)
                .HasForeignKey(d => d.StateId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FKStateChoreStateId");
        });

        modelBuilder.Entity<State>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PKState");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
