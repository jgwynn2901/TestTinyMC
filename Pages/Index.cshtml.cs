using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace TestTinyMC.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public string DescriptionContent { get; set; }

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
            DescriptionContent = "Welcome to TinyMC!";
        }

        public void OnGet()
        {

        }

        public void OnPost()
        {
            DescriptionContent = Request.Form["description"];
        }
    }
}
