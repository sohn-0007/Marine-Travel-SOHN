using Marine_Travel_Project_Backend.Models;

namespace Marine_Travel_Project_Backend.Repository.Interfaces
{
    public interface ICustomerRepository
    {
        public Dictionary<Guid, CustomerModel> Get();
    }
}
