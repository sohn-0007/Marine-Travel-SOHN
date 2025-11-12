using Marine_Travel_Project_Backend.Models;
using Marine_Travel_Project_Backend.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Marine_Travel_Project_Backend.Repository
{
    internal class CustomerRepository : ICustomerRepository
    {
        public Dictionary<Guid ,CustomerModel> Get()
        {
            var companyKeys = CompanyRepository.Seed.Select(c => c.Key).ToList();

            var random = new Random();
            ;






            //Simulating DB call
            return new Dictionary<Guid, CustomerModel>
            {
                [Guid.NewGuid()] = new CustomerModel { FullName = "Mikkel Glerup", Title = "Mr.", CompanyId = companyKeys[random.Next(companyKeys.Count)]  },
                [Guid.NewGuid()] = new CustomerModel { FullName = "Lasse Jessen", Title = "Mr.", CompanyId = companyKeys[random.Next(companyKeys.Count)] },
                [Guid.NewGuid()] = new CustomerModel { FullName = "Niels Christensen", Title = "Mr.", CompanyId = companyKeys[random.Next(companyKeys.Count)] },
                [Guid.NewGuid()] = new CustomerModel { FullName = "Benjamin Andersen", Title = "Dr.", CompanyId = companyKeys[random.Next(companyKeys.Count)] },
                [Guid.NewGuid()] = new CustomerModel { FullName = "Mikkel kronborg", Title = "Mrs", CompanyId = companyKeys[random.Next(companyKeys.Count)] },
                [Guid.NewGuid()] = new CustomerModel { FullName = "Malthe Phillipsen", Title = "", CompanyId = companyKeys[random.Next(companyKeys.Count)] },
            };
        }
    }
}
