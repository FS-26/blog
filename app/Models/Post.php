<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'picture',
        'description',
        'published',
        'publicationDate',
        'user_id',
        'category_id',
    ];

    /**
     * relationship methods
     */

    /**
     * Undocumented function
     *
     * @return void
     */
    public function author()
    {
        return $this->belongsTo(User::class);
    }
    public function categorie()
    {
        return $this->belongsTo(Category::class);
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function likesAuthors()
    {
        return $this->belongsToMany(User::class, 'post_user');
    }

}