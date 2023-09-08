import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.io.FileWriter;
import java.io.IOException;

public class PasswordValidator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter username: ");
        String username = scanner.nextLine();
        
        String password = "";
        while (true) {
            System.out.print("Enter password: ");
            password = scanner.nextLine();
            
            if (validatePassword(password)) {
                break;
            } else {
                System.out.println("Invalid password! Please try again.");
            }
        }
        
        try {
            FileWriter writer = new FileWriter("credentials.txt");
            writer.write(username + "\n");
            writer.write(password + "\n");
            writer.close();
            System.out.println("Credentials saved to file.");
        } catch (IOException e) {
            System.out.println("Error writing credentials to file.");
            e.printStackTrace();
        }
    }
    
    public static boolean validatePassword(String password) {
        String regex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(password);
        return matcher.matches();
    }
}


