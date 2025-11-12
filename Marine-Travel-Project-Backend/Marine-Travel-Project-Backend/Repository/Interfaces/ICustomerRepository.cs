using Marine_Travel_Project_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Marine_Travel_Project_Backend.Repository.Interfaces
{
    public interface ICustomerRepository
    {
        public Dictionary<Guid, CustomerModel> Get();
    }
}
