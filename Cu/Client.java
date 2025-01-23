import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class Client {
    public static void main(String[] args) {
        try (Socket socket = new Socket("191.176.17.37", 8080)) {
            System.out.println("Connected to server on port 8080...");
            BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            String serverMessage = input.readLine();
            System.out.println("Conexão feita com o servidor: " + serverMessage);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}