using AuthorizationAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AuthorizationAPI.Data
{
  public class UserDbContext : DbContext
  {
    public UserDbContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<LoginModel>? LoginModels { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<LoginModel>().HasData(new LoginModel
      {
        Id = 1,
        Username = "Bamsti",
        Password = "bamsti"
      });
    }
  }
}
