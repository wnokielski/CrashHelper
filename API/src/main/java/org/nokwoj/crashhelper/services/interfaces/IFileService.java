package org.nokwoj.crashhelper.services.interfaces;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.lang.reflect.Array;
import java.util.ArrayList;

public interface IFileService {
    ArrayList<String> savePhotos(MultipartFile[] photos);
    Resource getPhoto(String filename);
}
