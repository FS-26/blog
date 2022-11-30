<?php

namespace Database\Factories;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CommentReply>
 */
class CommentReplyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'message' => fake()->sentence(12),
            'replyDate' => now(),
            'user_id' => User::where('role', 'Admin')->get('id')->random(),
            'comment_id' => Comment::all('id')->random()
        ];
    }
}