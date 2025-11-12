using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Marine_Travel_Project_Backend.Models
{
    public  class CompanyModel
    {
        public Guid CompanyId { get; set; }
        public string CompanyName { get; set; } = string.Empty;

    }
}
