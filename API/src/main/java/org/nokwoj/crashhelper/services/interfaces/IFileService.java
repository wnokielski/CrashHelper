package org.nokwoj.crashhelper.services.interfaces;

import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

public interface IFileService {
    ArrayList<String> savePhotos(MultipartFile[] photos);
}
