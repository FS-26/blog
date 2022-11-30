<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->sentence(5),
            'content' => fake()->paragraph(),
            'picture' => fake()->imageUrl(500, 500, true),
            'description' => fake()->paragraph(),
            'published' => Arr::random([true, false]),
            'publicationDate' => fake()->date(),
            'user_id' => User::where('role', 'Editor')->get('id')->random(),
            'category_id' => Category::all('id')->random(),
        ];
    }
}