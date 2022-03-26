-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2022 at 05:19 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `poktwo`
--

-- --------------------------------------------------------

--
-- Table structure for table `bans`
--

CREATE TABLE `bans` (
  `user` int(10) UNSIGNED NOT NULL,
  `banner` int(10) UNSIGNED NOT NULL,
  `reason` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` int(10) UNSIGNED NOT NULL,
  `old` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `channel_comments`
--

CREATE TABLE `channel_comments` (
  `comment_id` int(11) NOT NULL,
  `id` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'ID to video or user.',
  `reply_to` bigint(20) NOT NULL COMMENT 'Comment that it replies to.',
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'The comment itself, formatted in Markdown.',
  `author` bigint(20) NOT NULL COMMENT 'Numerical ID of comment author.',
  `date` bigint(20) NOT NULL COMMENT 'UNIX timestamp when the comment was posted.',
  `deleted` tinyint(4) NOT NULL COMMENT 'States that the comment is deleted'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `id` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'ID to video or user.',
  `reply_to` bigint(20) NOT NULL COMMENT 'Comment that it replies to.',
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'The comment itself, formatted in Markdown.',
  `author` bigint(20) NOT NULL COMMENT 'Numerical ID of comment author.',
  `date` bigint(20) NOT NULL COMMENT 'UNIX timestamp when the comment was posted.',
  `deleted` tinyint(4) NOT NULL COMMENT 'States that the comment is deleted'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ipbans`
--

CREATE TABLE `ipbans` (
  `ip` varchar(16) NOT NULL DEFAULT '0.0.0.0',
  `reason` varchar(255) NOT NULL DEFAULT '<em>No reason specified</em>'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `sender` bigint(20) NOT NULL,
  `reciever` bigint(20) NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL,
  `time` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(128) NOT NULL DEFAULT 'Lorem ipsum',
  `text` text DEFAULT NULL,
  `time` bigint(20) DEFAULT 0,
  `redirect` varchar(256) DEFAULT NULL,
  `author_userid` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `level` int(11) DEFAULT NULL,
  `recipient` int(11) NOT NULL,
  `sender` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `author` int(11) NOT NULL,
  `time` bigint(20) NOT NULL,
  `recentview` bigint(20) NOT NULL,
  `tags` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tag_index`
--

CREATE TABLE `tag_index` (
  `video_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tag_meta`
--

CREATE TABLE `tag_meta` (
  `tag_id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL COMMENT 'Incrementing ID for internal purposes.',
  `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Username, chosen by the user',
  `email` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'User Email.',
  `password` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Password, hashed in bcrypt.',
  `token` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'User token for cookie authentication.',
  `joined` bigint(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'User''s join date',
  `lastview` int(11) NOT NULL DEFAULT 0,
  `lastpost` int(11) NOT NULL DEFAULT 0,
  `avatar` tinyint(4) NOT NULL DEFAULT 0,
  `ip` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '999.999.999.999',
  `timezone` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `powerlevel` tinyint(4) NOT NULL DEFAULT 1,
  `group_id` tinyint(4) NOT NULL DEFAULT 3 COMMENT 'Legacy Acmlmboard-related group ID field.',
  `customcolor` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#523bb8',
  `title` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `signature` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posts` int(11) NOT NULL DEFAULT 0,
  `threads` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` bigint(20) UNSIGNED NOT NULL COMMENT 'Incrementing ID for internal purposes.',
  `video_id` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Random alphanumeric video ID which will be visible.',
  `title` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Video title',
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Video description',
  `author` bigint(20) UNSIGNED NOT NULL COMMENT 'User ID of the video author',
  `time` bigint(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Unix timestamp for the time the video was uploaded',
  `most_recent_view` bigint(20) UNSIGNED NOT NULL,
  `views` bigint(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Video views',
  `flags` tinyint(4) UNSIGNED NOT NULL DEFAULT 0 COMMENT '8 bools to determine certain video properties',
  `category_id` int(11) DEFAULT 0 COMMENT 'Category ID for the video',
  `videofile` text COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Path to the video file(?)',
  `videolength` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'Length of the video in seconds'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `views`
--

CREATE TABLE `views` (
  `video_id` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `channel_comments`
--
ALTER TABLE `channel_comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tag_meta`
--
ALTER TABLE `tag_meta`
  ADD PRIMARY KEY (`tag_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `channel_comments`
--
ALTER TABLE `channel_comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tag_meta`
--
ALTER TABLE `tag_meta`
  MODIFY `tag_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'Incrementing ID for internal purposes.';

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Incrementing ID for internal purposes.';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
