using Marine_Travel_Project_Backend.Models;
using Marine_Travel_Project_Backend.Repository.Interfaces;
using Marine_Travel_Project_Backend.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace Marine_Travel_Project_Backend.Controllers;

public class CompanyController
{
    private readonly ILogger<CompanyController> _logger;
    private readonly ICompanyService _companyService;

    public CompanyController(
        ILogger<CompanyController> logger,
        ICompanyService companyService)
    {
        _logger = logger;
        _companyService = companyService;
    }

    [Function("GetAllCompanies")]
    public IActionResult Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = "Company/GetAll")] HttpRequest req)
    {
        var companies = _companyService.Get();
        _logger.LogInformation("C# HTTP trigger function processed a request.");
        return new OkObjectResult(
            companies.Select(c => new CompanyModel()
            {
                CompanyId = c.Key,
                CompanyName = c.Value.CompanyName
            }).ToList()
        );
    }
}