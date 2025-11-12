using Marine_Travel_Project_Backend.Models;
using Marine_Travel_Project_Backend.Repository.Interfaces;

namespace Marine_Travel_Project_Backend.Repository
{
    public class CompanyRepository : ICompanyRepository
    {
        public Dictionary<Guid, CompanyModel> Get()
        {
            return new Dictionary<Guid, CompanyModel>
            {
                [Guid.NewGuid()] = new CompanyModel { CompanyName = "Oceanic Travels" },
                [Guid.NewGuid()] = new CompanyModel { CompanyName = "Marine Adventures" },
                [Guid.NewGuid()] = new CompanyModel { CompanyName = "Seaside Excursions" },
                [Guid.NewGuid()] = new CompanyModel { CompanyName = "Blue Horizon Tours" },
                [Guid.NewGuid()] = new CompanyModel { CompanyName = "Coastal Cruises" },
            };
        }
    }
}
