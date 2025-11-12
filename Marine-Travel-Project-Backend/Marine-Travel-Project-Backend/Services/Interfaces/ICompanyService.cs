using Marine_Travel_Project_Backend.Models;

namespace Marine_Travel_Project_Backend.Services.Interfaces
{
    public interface ICompanyService
    {
        public Dictionary<Guid, CompanyModel> Get();
    }
}
