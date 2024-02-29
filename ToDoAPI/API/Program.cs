using API.Data;
using API.Services;
using API.Validators;
using API.Validators.ChoreValidator;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddDbContext<ToDoDB>();

//SERVICES
builder.Services.AddScoped<IChoreService, ChoreService>();
builder.Services.AddScoped<IStateService, StateService>();

//VALIDATORS
builder.Services.AddScoped<IChoreValidator, ChoreValidator>();


var app = builder.Build();

app.UseCors(options =>
{
    options.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});

app.UseHttpsRedirection();

app.MapControllers();
app.UseExceptionHandler("/errors/500");
app.UseStatusCodePagesWithReExecute("/errors/{0}");


app.Run();
