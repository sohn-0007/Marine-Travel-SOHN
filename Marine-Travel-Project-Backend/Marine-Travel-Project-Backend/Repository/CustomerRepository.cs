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
            //Simulating DB call
            return new Dictionary<Guid, CustomerModel>
            {
                [Guid.NewGuid()] = new CustomerModel { FullName = "Mikkel Glerup", Title = "Mr." },
                [Guid.NewGuid()] = new CustomerModel { FullName = "Lasse Jessen", Title = "Mr." },
                [Guid.NewGuid()] = new CustomerModel { FullName = "Niels Christensen", Title = "Mr." },
                [Guid.NewGuid()] = new CustomerModel { FullName = "Benjamin Andersen", Title = "Dr." },
                [Guid.NewGuid()] = new CustomerModel { FullName = "Mikkel kronborg", Title = "Mrs" },
                [Guid.NewGuid()] = new CustomerModel { FullName = "Malthe Phillipsen", Title = "" },
            };
        }
    }
}
