import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import matplotlib.pyplot as plt

model_path = '"C://Users//AVANTIKA//Downloads//results//model.keras.zip"'
model = tf.keras.models.load_model(model_path)


def preprocess_image(image_path, target_size=(224, 224)): 
    # Load the image
    img = load_img(image_path, target_size=target_size)
    img_array = img_to_array(img) 
    img_array = np.expand_dims(img_array, axis=0) 
    img_array = img_array / 255.0 
    return img_array

def predict_flower(image_path):
    preprocessed_image = preprocess_image(image_path)
    predictions = model.predict(preprocessed_image)
    predicted_class = CLASSES[np.argmax(predictions)]  
    confidence = np.max(predictions)  
    
    plt.imshow(load_img(image_path))
    plt.title(f'Predicted: {predicted_class} ({confidence:.2f})')
    plt.axis('off')
    plt.show()
    
    return predicted_class, confidence

image_path = '"C://Users//AVANTIKA//OneDrive//Desktop//nutmeals//hand-me//public//images//download.jpeg"'
predicted_class, confidence = predict_flower(image_path)
print(f'Predicted Class: {predicted_class}, Confidence: {confidence:.2f}')
