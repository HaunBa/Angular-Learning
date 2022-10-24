var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var MyAllowAnyOrigins = "_allowAnyOrigins";
// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
  options.AddPolicy(name: MyAllowSpecificOrigins,
                    policy =>
                    {
                      policy.AllowAnyOrigin();
                    });
    options.AddPolicy(name: MyAllowAnyOrigins,
                      policy =>
                      {
                          policy.AllowAnyHeader();
                          policy.AllowAnyOrigin();
                      });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowAnyOrigins);

app.UseAuthorization();

app.MapControllers();
app.MapDefaultControllerRoute();

app.Run();
