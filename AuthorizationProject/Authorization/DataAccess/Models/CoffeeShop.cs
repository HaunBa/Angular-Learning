﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class CoffeeShop
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string OpeningHours { get; set; }
        public string Adress { get; set; }
    }
}
