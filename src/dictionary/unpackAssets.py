import tarfile

with tarfile.open('assets.tar.gz') as file:
    file.extractall('./assets')
  

        