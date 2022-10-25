using AuthorizationAPI.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var EnableCors = "EnableCors";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<UserDbContext>(opt =>
{
  opt.UseSqlServer(builder.Configuration.GetConnectionString("UserDb"));
});

builder.Services.AddCors(opt =>
{
  opt.AddPolicy("EnableCors", builder =>
  {
    builder.AllowAnyOrigin()
           .AllowAnyHeader()
           .AllowAnyMethod();
  });
});

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

builder.Services.AddAuthentication(opt =>
{
  opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
  opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
      .AddJwtBearer(options =>
      {
        options.TokenValidationParameters = new TokenValidationParameters
        {
          ValidateIssuer = true,
          ValidateAudience = true,
          ValidateLifetime = true,
          ValidateIssuerSigningKey = true,
          ValidIssuer = "https://localhost:7035",
          ValidAudience = "https://localhost:7035",
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"))
        };
      });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseCors("EnableCors");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
