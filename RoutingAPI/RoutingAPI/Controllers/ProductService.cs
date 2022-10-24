using System.Text.Json;

namespace RoutingAPI.Controllers
{
  public class ProductService
  {
    public static List<Product>? GetProductsFromFile()
    {
      var products = JsonSerializer.Deserialize<List<Product>>(File.ReadAllText("C:\\Users\\Haunschmied.Bastian\\Documents\\GitHub\\Angular-Learning\\RoutingAPI\\RoutingAPI\\Products.json"));
      return products;
    }
  }
}
