using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission14_haylowry.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission14_haylowry.Controllers;
[ApiController]
[Route("[controller]")]
public class FoodController : Controller
{
    private MoviesDbContext context;

    public FoodController(MoviesDbContext temp) => context = temp;

    // GET: /<controller>/
    public IEnumerable<Movies> Get()
    {
        return context.Movies.ToArray()
            .Where(x => x.Edited == "Yes" || x.Edited == null)
            .OrderBy(x => x.Title);
    }
}

