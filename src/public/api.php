<?php
/**
 * Dummy page for sending back some data to demonstrate debugging
 * with Xhr breakpoints. Takes the place of php api and database etc.
 */

require_once('../../vendor/autoload.php');

use Symfony\Component\HttpFoundation\Response;

$galleryData = [
    'cats' => [
        ['src'=>'cat_hat_1.jpg', 'alt' => 'Photo of cat wearing hat'],
        ['src'=>'cat_hat_2.jpg', 'alt' => 'Photo of cat wearing hat'],
        ['src'=>'cat_hat_3.jpg', 'alt' => 'Photo of cat wearing hat'],
        ['src'=>'cat_hat_4.jpg', 'alt' => 'Photo of cat wearing hat'],
        ['src'=>'cat_hat_5.jpg', 'alt' => 'Photo of cat wearing hat'],
        ['src'=>'cat_hat_6.jpg', 'alt' => 'Photo of cat wearing hat'],
    ],
    'dogs' => [
        ['src'=>'dog_clogs_1.jpeg','alt' => 'Photo of dog with clog(s)'],
        ['src'=>'dog_clogs_2.jpg', 'alt' => 'Photo of dog with clog(s)'],
        ['src'=>'dog_clogs_3.png', 'alt' => 'Photo of dog with clog(s)'],
        ['src'=>'dog_clogs_4.jpg', 'alt' => 'Photo of dog with clog(s)'],
        ['src'=>'dog_clogs_5.jpg', 'alt' => 'Photo of dog with clog(s)'],
        ['src'=>'dog_clogs_6.JPG', 'alt' => 'Photo of dog with clog(s)'],
        ['src'=>'dog_clogs_7.jpg', 'alt' => 'Photo of dog with clog(s)'],
    ],
    'guineapigs' => [
        ['src'=>'pig_wig_1.jpg','alt' => 'Photo of guinea pig in a wig'],
        ['src'=>'pig_wig_2.jpg', 'alt' => 'Photo of guinea pig in a wig'],
        ['src'=>'pig_wig_3.jpeg', 'alt' => 'Photo of guinea pig in a wig'],
        ['src'=>'pig_wig_4.jpg', 'alt' => 'Photo of guinea pig in a wig'],
        ['src'=>'pig_wig_5.jpg', 'alt' => 'Photo of guinea pig in a wig'],
        ['src'=>'pig_wig_6.jpg', 'alt' => 'Photo of guinea pig in a wig'],
    ],
];

function sendErrorResponse($message = '')
{
    $error = new stdClass();
    $error->message = $message;
    $response = new Response(
        json_encode($error),
        Response::HTTP_BAD_REQUEST,
        ['content-type' => 'application/json']
    );
    $response->send();
}

function sendSuccessResponse($data)
{
    $response = new Response(
        json_encode($data),
        Response::HTTP_OK,
        ['content-type' => 'application/json']
    );
    $response->send();
}

if (isset($_GET['gallery'])) {
    $requestedGallery = $_GET['gallery'];
    $availableGalleries = ['cats', 'dogs', 'guineapigs'];

    if (!in_array($requestedGallery, $availableGalleries)) {
        sendErrorResponse('Invalid gallery requested. Please try again.');
    }

    $data = $galleryData[$requestedGallery];
    sendSuccessResponse($data);
    exit();
}

sendErrorResponse('Invalid request');
