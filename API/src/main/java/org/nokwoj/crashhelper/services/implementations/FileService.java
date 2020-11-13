package org.nokwoj.crashhelper.services.implementations;

import org.nokwoj.crashhelper.services.interfaces.IFileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Calendar;

@Service
public class FileService implements IFileService {

    private final Path root = Paths.get("uploads");

    @Override
    public ArrayList<String> savePhotos(MultipartFile[] photos) {

        ArrayList<String> filesNames = new ArrayList<String>();

        for (MultipartFile file: photos
             ) {

            String origFileName = file.getOriginalFilename();   //original file name with extension
            String[] parts = origFileName.split("[.]");      //split by "."
            String ext = parts[parts.length-1];         //extract extension
            String newFileName = Calendar.getInstance().getTimeInMillis() + "." + ext;     //create new file name

            filesNames.add(newFileName);

            try {
                Files.copy(file.getInputStream(), this.root.resolve(newFileName));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return filesNames;
    }
}
