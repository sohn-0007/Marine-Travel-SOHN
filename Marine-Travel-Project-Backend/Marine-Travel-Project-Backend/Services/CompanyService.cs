using Marine_Travel_Project_Backend.Models;
using Marine_Travel_Project_Backend.Repository.Interfaces;
using Marine_Travel_Project_Backend.Services.Interfaces;

namespace Marine_Travel_Project_Backend.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository _companyRepository;

        public CompanyService(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        public Dictionary<Guid, CompanyModel> Get()
        {
            return _companyRepository.Get();
        }
    }
}
