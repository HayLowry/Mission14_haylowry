﻿using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
namespace Mission14_haylowry.Data;

public class Movies
{
    [Key]
    public int MovieId { get; set; }
    public string? Category { get; set; }
    public string? Title { get; set; }
    public int? Year { get; set; }
    public string? Director { get; set; }
    public string? Rating { get; set; }
    public string? Edited { get; set; }
    public string? LentTo { get; set; }
    public string? Notes { get; set; }

}

