using Marine_Travel_Project_Backend.Models;

namespace Marine_Travel_Project_Backend.Services.Interfaces
{
    public interface ICustomerService
    {
        public Dictionary<Guid, CustomerModel> Get();
    }
}
