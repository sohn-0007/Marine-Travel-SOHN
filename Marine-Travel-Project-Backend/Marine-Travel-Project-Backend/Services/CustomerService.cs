using Marine_Travel_Project_Backend.Models;
using Marine_Travel_Project_Backend.Repository.Interfaces;
using Marine_Travel_Project_Backend.Services.Interfaces;

namespace Marine_Travel_Project_Backend.Services
{
    internal class CustomerService : ICustomerService
    {
        public readonly ICustomerRepository _customerRepository;
        public CustomerService(ICustomerRepository customerRepository) 
        {
            _customerRepository = customerRepository;
        }

        public Dictionary<Guid, CustomerModel> Get()
        {
            var customers = _customerRepository.Get();
            return customers;
        }

    }
}
