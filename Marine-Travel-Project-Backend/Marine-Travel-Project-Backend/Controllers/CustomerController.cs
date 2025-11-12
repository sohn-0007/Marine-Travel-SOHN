using Marine_Travel_Project_Backend.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace Marine_Travel_Project_Backend.Controllers;

public class CustomerController
{
    private readonly ILogger<CustomerController> _logger;
    private readonly ICustomerService _customerService;
    public CustomerController(ILogger<CustomerController> logger, ICustomerService customerService)
    {
        _logger = logger;
        _customerService = customerService;
    }

    [Function("GetAllCustomers")]
    public IActionResult Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = "Customer/GetAll")] HttpRequest req)
    {
        var customers = _customerService.Get();
        _logger.LogInformation("C# HTTP trigger function processed a request.");
        return new OkObjectResult(customers.Select(c => c.Value).ToList());
    }
}