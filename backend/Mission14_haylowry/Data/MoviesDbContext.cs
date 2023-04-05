using System;
using Microsoft.EntityFrameworkCore;
namespace Mission14_haylowry.Data;

public class MoviesDbContext : DbContext
{

    public MoviesDbContext (DbContextOptions<MoviesDbContext> options) : base(options) { }

    public DbSet<Movies> Movies { get; set; }

}

