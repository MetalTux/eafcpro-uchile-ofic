-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "provider" VARCHAR(50) NOT NULL,
    "provider_account_id" VARCHAR(150) NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" VARCHAR(50),
    "scope" VARCHAR(150),
    "id_token" TEXT,
    "session_state" VARCHAR(150),

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "post_id" INTEGER,
    "match_id" INTEGER,
    "user_name" VARCHAR(100) NOT NULL,
    "user_email" VARCHAR(150),
    "content" TEXT NOT NULL,
    "is_approved" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contracts" (
    "id" SERIAL NOT NULL,
    "player_id" INTEGER NOT NULL,
    "salary" DECIMAL(12,2),
    "currency" VARCHAR(3) DEFAULT 'EUR',
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "contract_type" VARCHAR(50),
    "clauses" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_results" (
    "id" SERIAL NOT NULL,
    "match_id" INTEGER NOT NULL,
    "home_score" INTEGER,
    "away_score" INTEGER,
    "half_time_home_score" INTEGER,
    "half_time_away_score" INTEGER,
    "match_report" TEXT,
    "attendance" INTEGER,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches" (
    "id" SERIAL NOT NULL,
    "home_team" VARCHAR(100) NOT NULL,
    "away_team" VARCHAR(100) NOT NULL,
    "match_date" TIMESTAMPTZ(6) NOT NULL,
    "venue" VARCHAR(100),
    "competition" VARCHAR(100),
    "match_day" INTEGER,
    "status" VARCHAR(20) DEFAULT 'scheduled',
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_match_stats" (
    "id" SERIAL NOT NULL,
    "player_id" INTEGER NOT NULL,
    "match_id" INTEGER NOT NULL,
    "minutes_played" INTEGER DEFAULT 0,
    "goals" INTEGER DEFAULT 0,
    "assists" INTEGER DEFAULT 0,
    "yellow_cards" INTEGER DEFAULT 0,
    "red_cards" INTEGER DEFAULT 0,
    "shots" INTEGER DEFAULT 0,
    "shots_on_target" INTEGER DEFAULT 0,
    "passes" INTEGER DEFAULT 0,
    "pass_accuracy" DECIMAL(4,1) DEFAULT 0,
    "tackles" INTEGER DEFAULT 0,
    "interceptions" INTEGER DEFAULT 0,
    "saves" INTEGER DEFAULT 0,
    "pro_clubs_rating" DECIMAL(3,1) DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "player_match_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_season_stats" (
    "id" SERIAL NOT NULL,
    "player_id" INTEGER NOT NULL,
    "season" VARCHAR(9) NOT NULL,
    "matches_played" INTEGER DEFAULT 0,
    "goals" INTEGER DEFAULT 0,
    "assists" INTEGER DEFAULT 0,
    "yellow_cards" INTEGER DEFAULT 0,
    "red_cards" INTEGER DEFAULT 0,
    "avg_rating" DECIMAL(3,1) DEFAULT 0,
    "avg_minutes" DECIMAL(4,1) DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "player_season_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "position" VARCHAR(50) NOT NULL,
    "jersey_number" INTEGER,
    "nationality" VARCHAR(50),
    "birth_date" DATE,
    "height_cm" INTEGER,
    "weight_kg" INTEGER,
    "photo_url" VARCHAR(255),
    "bio" TEXT,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "slug" VARCHAR(200) NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "cover_image" VARCHAR(255),
    "author_id" INTEGER,
    "is_published" BOOLEAN DEFAULT false,
    "published_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "email" VARCHAR(150) NOT NULL,
    "email_verified" TIMESTAMPTZ(6),
    "image" VARCHAR(255),
    "role" VARCHAR(20) DEFAULT 'user',
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE INDEX "idx_comments_match" ON "comments"("match_id");

-- CreateIndex
CREATE INDEX "idx_comments_post" ON "comments"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "match_results_match_id_key" ON "match_results"("match_id");

-- CreateIndex
CREATE INDEX "idx_matches_date" ON "matches"("match_date");

-- CreateIndex
CREATE INDEX "idx_matches_status" ON "matches"("status");

-- CreateIndex
CREATE INDEX "idx_matches_teams" ON "matches"("home_team", "away_team");

-- CreateIndex
CREATE INDEX "idx_player_stats_match" ON "player_match_stats"("match_id");

-- CreateIndex
CREATE INDEX "idx_player_stats_player" ON "player_match_stats"("player_id");

-- CreateIndex
CREATE UNIQUE INDEX "player_match_stats_player_id_match_id_key" ON "player_match_stats"("player_id", "match_id");

-- CreateIndex
CREATE UNIQUE INDEX "player_season_stats_player_id_season_key" ON "player_season_stats"("player_id", "season");

-- CreateIndex
CREATE INDEX "idx_players_position" ON "players"("position");

-- CreateIndex
CREATE UNIQUE INDEX "posts_slug_key" ON "posts"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "match_results" ADD CONSTRAINT "match_results_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "player_match_stats" ADD CONSTRAINT "player_match_stats_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "player_match_stats" ADD CONSTRAINT "player_match_stats_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "player_season_stats" ADD CONSTRAINT "player_season_stats_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
